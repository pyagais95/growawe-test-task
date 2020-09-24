import moment from 'moment'
const to = moment(new Date()).startOf('day').utc().format()
const from = moment(new Date()).startOf('day').subtract(6, 'days').utc().format()

const getDataByCountry = async () => {
  try {
    const response = await fetch(`https://api.covid19api.com/country/kyrgyzstan?from=${from}&to=${to}`,)
    return await response.json()
  } catch (e) {
    console.log(e, 'error')
  }
}



export {
  getDataByCountry,
}