module.exports = (client, event, id) => {
  client.logger.log(`RaM #${id} Disconnected`, "warn")
}
