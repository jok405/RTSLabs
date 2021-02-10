function fulcrum(numberSubmit, benchmarkNumber) 
{
    let under = 0;
    let over = 0;

    numberSubmit.forEach((numberSubmit) =>
    {
        (numberSubmit > benchmarkNumber) ? under++ : over++
    });
    console.log(`below: ${under}, above: ${over}`);
}
fulcrum([1,5,2,1,10], 6);