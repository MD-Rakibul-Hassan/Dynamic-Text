const dummyText = [
    'Apple pie soufflé lemon drops donut gummi bears. Cake muffin ice cream croissant muffin. Dragée candy canes chocolate bar jelly-o apple pie lollipop tart. Sweet roll jelly beans chocolate cake tart oat cake.',

    'Carrot cake halvah jelly-o carrot cake donut bonbon liquorice. Topping dragée gummi bears sugar plum gingerbread danish cake. Macaroon sweet candy canes muffin sesame snaps powder. Powder brownie apple pie candy lollipop.',

    'Sweet roll shortbread jelly beans brownie marzipan chupa chups gingerbread gummies. Sesame snaps danish sweet jelly-o cotton candy wafer dessert. Lollipop jelly-o jelly marzipan donut. Marshmallow dragée fruitcake chocolate bar lemon drops gingerbread jelly dragée.',

    'Chocolate bar cupcake donut chupa chups gummi bears lollipop. Bonbon pudding bonbon wafer powder lemon drops marzipan chocolate cheesecake. Dragée chocolate cake cheesecake caramels chocolate. Bonbon chocolate cake sweet roll topping icing croissant cheesecake.',

    'Cake jelly-o toffee sweet jujubes chupa chups tootsie roll powder croissant. Icing pastry lemon drops halvah toffee marshmallow carrot cake. Chocolate cake jelly beans apple pie donut sugar plum marzipan chocolate bar sweet roll soufflé. Biscuit sesame snaps apple pie jujubes tootsie roll croissant.',

    'Pie muffin shortbread lollipop ice cream. Muffin candy canes liquorice liquorice wafer apple pie lollipop. Marshmallow lemon drops oat cake cake candy canes dessert cake chupa chups lollipop.',

    'Cheesecake halvah apple pie biscuit tootsie roll shortbread. Toffee gummies fruitcake cake dessert gummies icing sweet roll. Pastry brownie croissant brownie sugar plum cake.',

    'Lollipop macaroon lollipop jelly-o dessert brownie gummies. Jelly-o halvah carrot cake croissant carrot cake cake cheesecake dragée pie. Apple pie dragée sweet jujubes danish lollipop. Gingerbread wafer halvah brownie gummi bears caramels jelly danish chocolate bar.',

    'Halvah pie caramels marshmallow liquorice cookie bonbon caramels. Macaroon powder biscuit pastry danish. Donut danish pastry powder danish candy canes dessert. Cookie liquorice marzipan cheesecake jujubes sweet roll macaroon shortbread chocolate.',

    'Shortbread bear claw chupa chups sesame snaps tiramisu jelly beans liquorice macaroon. Cheesecake cupcake pie tootsie roll bear claw soufflé muffin. Gummi bears soufflé bear claw marzipan cheesecake icing croissant cake marshmallow.',
];

const form = document.getElementById('form');
const amount = document.getElementById('amount');
const reslut = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * dummyText.length);
    if (isNaN(value) || value <= 0 || value > 10) {
        reslut.innerHTML = `<p>${dummyText[random]}</p>`
    } else {
        const slicedArr = dummyText.slice(0,value);
        const finalArr = slicedArr.map(function (singleText) {
            return `<p>${singleText}</P>`
        }).join('');
        reslut.innerHTML = finalArr;
    }
    reslut.classList.add('reslut-bg')
});

