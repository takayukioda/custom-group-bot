module.exports = (controller) => {
  controller.hear(["groups"], "direct_message,direct_mention,mention", (bot, message) => {
    bot.storage.teams.get(`${message.team}_custom_groups`, (err, groups = {}) => {
      const groupNames = Object.keys(groups);
      bot.reply(message, groupNames.join("\n"));
    });
  });
  controller.hear(["members (.*)"], "direct_message,direct_mention,mention", (bot, message) => {
    const groupName = message.match[1];
    bot.storage.teams.get(`${message.team}_custom_groups`, (err, groups = {}) => {
      const members = groups[groupName];
      if (members === undefined) {
        bot.reply(message, `There was no group named ${groupName}.`);
      } else if (members.length === 0) {
        bot.reply(message, "You have no members in your group");
      }
    });
  });
  controller.hear(["add (.*)"], "direct_message,direct_mention,mention", (bot, message) => {
  });
  controller.hear(["delete (.*)"], "direct_message,direct_mention,mention", (bot, message) => {
  });
  controller.hear(["join (.*)"], "direct_message,direct_mention,mention", (bot, message) => {
  });
  controller.hear(["leave (.*)"], "direct_message,direct_mention,mention", (bot, message) => {
  });
  controller.hear(["invite (.*) to (.*)"], "direct_message,direct_mention,mention", (bot, message) => {
  });
  controller.hear(["remove (.*) from (.*)"], "direct_message,direct_mention,mention", (bot, message) => {
  });
  controller.hear([" ?g:(.*) ?"], "direct_message,direct_mention,mention", (bot, message) => {
  });
};
