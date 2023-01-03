let defaultcity = '北京'
try {
  if (localStorage.getItem('city')) {
    defaultcity = localStorage.getItem('city')
  }
} catch (error) {}
export default {
  city: defaultcity
}
