module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Aspiring Andelans',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'https://join.slack.com/t/aspiringandelans/shared_invite/enQtMjc3NjQ4MjcwNzU0LWE1ZWFhZWQzOWI1Y2IxMzhiNzg0NjkxMzNlY2EyOWU1ZDM4YTQ4NzNhYTc0ZDkwYzE1ODdkOTI4ZGY5ZDM4YTA',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-278522529702-277792104165-281289041523-796dbd19e90c0f7262b9d846bf0f9d4d',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,
  // an optional security measure - if both are set, then recaptcha will be used.
  recaptchaSiteKey: process.env.RECAPTCHA_SITE || null,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET || null,
  // default locale
  locale: process.env.LOCALE || "en",
};
