# Slack pull request list notification
## Usage
```yaml
name: Slack pull request list notification

on:
  schedule:
    - cron: '* 10 * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Notify slack pr list
      env:
        SLACK_WEBHOOK_URL : ${{ secrets.SLACK_WEBHOOK_URL }}
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        TEXT: "* am10 notification *" 
      uses: jun3453/slack-pr-list-notification@master
```

### Arguments
#### SLACK_WEBHOOK_URL
Write slack incomming webhook url. Please Set your repository secrets.

#### PULL_REQUEST_*
See the following URL. https://developer.github.com/v3/pulls/

#### IS_SEND_HERE_MENTION
boolean. Whether to include a mention here when sending a message.
