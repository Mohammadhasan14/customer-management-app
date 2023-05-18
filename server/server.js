const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {Customer} = require('./model/customerSchema')

const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.urlencoded({extended: "true"}))

app.use(express.json())


app.post('/addmore', async(req,res)=>{
  const newData = new Customer(req.body)
  console.log(newData)
  try{
    await newData.save()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    res.status(200).send('data saved!')
  }
  catch (error) {
    res.status(400).send(error)
  }
})

app.get('/', async(req, res) => {
  const data = await Customer.find()
  console.log('data ',data)
  res.status(200).send(data)
})


app.post('/edit', async (req, res)=>{
  const performanceData = req.body
  console.log('performanceData ',performanceData);
  try{
    const updatePerformance = await Customer.findOneAndUpdate(
      {_id : performanceData._id},
      performanceData,
      {new : true}
      )

    res.status(200).send('Data received')
  } catch (err){
    console.log(err)
    res.status(400).send(err)

  }
})

app.delete('/delete', async (req, res)=>{
  const deleteData = req.body;
  console.log('deleteData',deleteData)
  try {
    const deletePerformance = await Customer.findOneAndDelete(
      {_id: deleteData._id}
    );
    res.status(200).send('data successfully deleted')
  } catch (error) {
    console.error(error)
    console.log(error)
  }

})


app.listen(port, () => {
  console.log(`server is running on port 3000 ${port}`)
})