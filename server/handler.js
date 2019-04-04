const axios = require("axios");
const url = "https://holidayapi.com/v1/holidays?key=79f32945-e7d9-4d6b-9917-5639a016caed&country=NG&year=2019&month=0&day=01";


 const extRequest =  (req, res) => {
  axios.get(url)
  .then((response) => {
    const body = response.data.holidays.map(holiday =>({
      holiday_name: holiday["name"],
      holiday_date: holiday["date"],
      holiday_type: holiday["public"]? "Public" : "N/A"
    }));
    res.json({
      // count: body.length,
      body
    })
    // console.log(body);
  })
  .catch((error) => {
    res.status(400);
    res.json({
      message: error.message
    });
  });
};

module.exports = extRequest;
 