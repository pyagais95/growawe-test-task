const getDataByCountry = async () =>  {
  try {
    const response = await fetch(`https://api.covid19api.com/country/kyrgyzstan?from=2020-09-01T00:00:00Z&to=2020-09-05T00:00:00Z`,)
    return await response.json()
  } catch (e) {
    console.log(e, 'error')
  }
}

export {
  getDataByCountry
}