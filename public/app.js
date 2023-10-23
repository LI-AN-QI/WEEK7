window.addEventListener('load',()=>{
    document.getElementById('btn-income').addEventListener('click',()=>{
        let income = document.getElementById('income').value;
        console.log(income);
        let obj = {"Income":income};
        let jsonData = JSON.stringify(obj);

        fetch('/Income',{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data=>{console.log(data)})
    
    })

    document.getElementById('get-history').addEventListener('click',()=>{
        fetch('/History')
        .then(resp=>resp.json())
        .then(data=>{
            document.getElementById('history-info').innerHTML ='';
            // console.log(data.data);
            for(let i=0;i<data.data.length;i++){
                // let string = data.data[i].Date +':'+'$'+data.data[i].Income;
                // let elt = document.createElement('p');
                // elt.innerHTML = string;
                // document.getElementById('history-info').appendChild(elt);
                // let historyincome = data.data[i].Income
                let historyincome = data.data[i].Income
                let eltincome = document.createElement('p');
                
                eltincome.innerHTML = '$'+ historyincome;
                    //style：
                    eltincome.style.fontSize = '58px';
                    eltincome.style.color = 'rgb(129 69 244)';
                    eltincome.style.fontWeight = '800'; 
                    eltincome.style.margin = '75px 0 32px 0'; 
                document.getElementById('history-info').appendChild(eltincome);
                //////////////////////////////



                let historydate = data.data[i].Date
                let eltdate = document.createElement('p');
                eltdate.innerHTML = historydate;
                    //style：
                    eltdate.style.fontSize = '15px';
                    eltdate.style.color = '#575757';
                    
                document.getElementById('history-info').appendChild(eltdate);
                document.getElementById('close').style.display = 'block';

            }
        })
    });

    document.getElementById('close').addEventListener('click',()=>{
        document.getElementById('history-info').innerHTML ='';
        document.getElementById('close').style.display = 'none';
    })
})