var axios = require("axios");

const text = process.env.TEXT
const url = process.env.SLACK_WEBHOOK_URL;
const githubToken = process.env.GITHUB_TOKEN; 
const repositoryName = process.env.GITHUB_REPOSITORY;

const getList = async () => {
    const res = await axios.get(`https://api.github.com/repos/${repositoryName}/pulls`, {
        headers: {
            Authorization: `token ${githubToken}`,
        },
    });
    return res.data;
};

getList().then(list => {
    const blocks = [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: text,
            },
        }
    ];
    list.forEach(pr => {
        blocks.push(
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*<${ pr.html_url }|${ pr.title }>*`,
                },
            }
        )
    })
    axios.post(url, { blocks: blocks});
})


