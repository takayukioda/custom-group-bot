module.exports = (controller) => {
  controller.hear(['groups'], 'direct_message,direct_mention,mention', () => {
  })
  controller.hear(['members (.*)'], 'direct_message,direct_mention,mention', () => {
  })
  controller.hear(['add (.*)'], 'direct_message,direct_mention,mention', () => {
  })
  controller.hear(['delete (.*)'], 'direct_message,direct_mention,mention', () => {
  })
  controller.hear(['join (.*)'], 'direct_message,direct_mention,mention', () => {
  })
  controller.hear(['leave (.*)'], 'direct_message,direct_mention,mention', () => {
  })
  controller.hear(['invite (.*) to (.*)'], 'direct_message,direct_mention,mention', () => {
  })
  controller.hear(['remove (.*) from (.*)'], 'direct_message,direct_mention,mention', () => {
  })
  controller.hear(['g:(.*)'], 'direct_message,direct_mention,mention', () => {
  })
}

