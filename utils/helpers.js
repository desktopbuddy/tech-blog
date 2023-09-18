module.exports = {
  // YYYY/MM/DD date format
  format_date: (date) => {
    return `${new Date(date).getFullYear()}/${new Date(date).getMonth() + 1}/${new Date(date).getDate()}`
  }
}