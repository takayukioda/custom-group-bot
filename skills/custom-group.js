module.exports = (controller) => {
  controller.hear(['groups'], 'direct_message,direct_mention,mention', (bot, message) => {
    bot.storage.teams.get(`${message.team}_custom_group`, (err, groups) => {
      const groupNames = Object.keys(groups)
      bot.reply(message, groupNames.join("\n"))
    })
  })
  controller.hear(['members (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
  })
  controller.hear(['add (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
  })
  controller.hear(['delete (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
  })
  controller.hear(['join (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
  })
  controller.hear(['leave (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
  })
  controller.hear(['invite (.*) to (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
  })
  controller.hear(['remove (.*) from (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
  })
  controller.hear([' ?g:(.*) ?'], 'direct_message,direct_mention,mention', (bot, message) => {
  })
}

