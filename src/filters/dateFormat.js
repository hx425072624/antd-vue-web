let formatYear = (value) => {
  if (value instanceof Date) {
    return value.getFullYear()
  } else {
    return ''
  }
}
export { formatYear }
