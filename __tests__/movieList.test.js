const { Builder, Capabilities } = require ('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {deleteMovie} = require('../deleteMovie')

beforeAll(async () =>{
    await driver.get('http://127.0.0.1:5501/automation/movieList/index.html')

})

afterAll(async () => {

    await driver.quit()
})

test('Delete a movie', async () =>{
    await deleteMovie(driver)

    await driver.sleep(5000)
})

// test('Add a movie', async () =>{
//     await AddMovie(driver)

//     await driver.sleep(5000)
// })

