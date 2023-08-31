function sortColors(colors){
    let white = 0
    let red = 0
    let blue = colors.length - 1
    let temp

    //continue sorting until white pointer is ahead of blue
    while( blue >= white  ){
        
        if(colors[white] === 0){
            temp = colors[white]
            colors[white] = colors[red]
            colors[red] = temp
            white++
            red++
            console.log(colors)
        }
        else if(colors[white] === 1){
            white++
        }
        else if(colors[white] === 2){
            temp = colors[blue]
            colors[blue] = colors[white]
            colors[white] = temp
            blue--
        }
    }
    

    return colors;
}