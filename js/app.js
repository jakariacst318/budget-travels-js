
const allButton = document.getElementsByClassName('add-btn')
let count = 0;


for (const btn of allButton) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        // document.getElementById('home-card').innerText = count;
        setInnerText('home-card', count)
        // setInnerText('total-cost', totalCostSum)
        // console.log(e.target.parentNode.parentNode.childNodes[1].innerText)
        const placeName = (e.target.parentNode.parentNode.childNodes[1].innerText);
        // console.log(e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText)
        const price = (e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText);
        // console.log( placeName,price)
        const selectedContainer = document.getElementById('selected-place-container')

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placeName;

        const p2 = document.createElement('p');
        p2.innerText = price;
        li.appendChild(p)
        li.appendChild(p2)

        // total-budget

        const budget = document.getElementById('total-budget').innerText;
        const convertedBudget = parseInt(budget)

            if(convertedBudget - parseInt(price) < 0){
                alert('low budget pleas earn more')
                
                return;
            }

        document.getElementById('total-budget').innerText = convertedBudget - parseInt(price)


        selectedContainer.append(li)

        const totalCost = document.getElementById('total-cost').innerText;
        const convetTotalCost = parseInt(totalCost)
        const totalCostSum = convetTotalCost + parseInt(price)
        // document.getElementById('total-cost').innerText = totalCostSum
        // function us kore ata abr kori  ^

        const grandTotal = document.getElementById('grand-total').innerText;
        const convetGrandTotal = parseInt(grandTotal);
        const totalGrnadSum = convetGrandTotal + parseInt(price);

        setInnerText('total-cost', totalCostSum)
        setInnerText('grand-total', totalGrnadSum)

    })

}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}

function grandTotalCostOffer(category) {
    // console.log(category)
    const  totalGrnadSum = document.getElementById('total-cost').innerText
    const convetGrandTotal = parseInt(totalGrnadSum)
    if (category === 'bus') {
        setInnerText('grand-total', convetGrandTotal + 100);
    }
    else if (category === 'train') {
        setInnerText('grand-total', convetGrandTotal - 200);
    }
    else if (category === 'flight') {
        setInnerText('grand-total', convetGrandTotal + 500);
    }
    else{
        setInnerText('grand-total', convetGrandTotal )
    }
}