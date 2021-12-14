// const {deleteMovie} = require('./deleteMovie')

const {By} = require ('selenium-webdriver')

const deleteMovie  = async (driver) => {
    const movie = "One flew over the Cuckoos nest"
    
    await driver.findElement(By.xpath('//input')).sendKeys(movie)
    await driver.findElement(By.xpath('//button')).click()
    
    const movieText = await driver.findElement(By.xpath('//li/span')).getText()
    
    expect(movieText).toEqual(movie)

    await driver.findElement(By.xpath('//li/button')).click()

    const movies = await driver.findElements(By.xpath('//li')) 
    expect(movies).toHaveLength(0)
    //  await driver.findElements(By.xpath('.//input')).sendKeys('Dragonball Super: Ressurection F')
    // // Selection
    //     await driver.findElements(By.xpath('//button')).click()
    // // click
    // const addMovie = await driver.findElements(By.xpath(`//li`))
    // select all of elements of children of LI  (all li)

    // check elements of 0
    


}

module.exports = {
    deleteMovie
}
