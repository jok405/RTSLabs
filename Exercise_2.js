function rotateCounterClockwise(stringValue, rotationInputValue) 
{
    let tempArray = [];
    rotationInputValue = rotationInputValue % (stringValue.length);

    for(let i = 0; i < stringValue.length; i++) 
    {
        tempArray[i] = stringValue[rotationInputValue];
        rotationInputValue = ++rotationInputValue >= stringValue.length ? rotationInputValue % (stringValue.length) : rotationInputValue;
    }
    console.log(tempArray);

    return tempArray;
}

rotateCounterClockwise("MyString", 2);
// rotateCounterClockwise("MyString", 3);