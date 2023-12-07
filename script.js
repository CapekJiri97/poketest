function map(value, a, b, c, d) {
    return c + (value - a) * (d - c) / (b - a);
}

function drawPoint(x, y) {
    const graph = document.getElementById('svg-graph');
    const width = graph.getAttribute('width');
    const height = graph.getAttribute('height');

    // Vykreslení pointu na zadaných souřadnicích
    const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    point.setAttribute('cx', map(x, -10, 10, 10, width - 10)); // Mapování souřadnic x na šířku graphu
    point.setAttribute('cy', map(y, -10, 10, height - 10, 10)); // Mapování souřadnic y na výšku graphu
    point.setAttribute('r', '10'); //radius
    point.setAttribute('fill', 'var(--main-color-hover)');
    graph.appendChild(point);
}
// x+ extrovert
// y+ labilní 
function processAnswers() {
    let answers = [  
        {  
           "id": 1,
           "xWeight": 0.3,
           "yWeight": 0.8,
           "value": document.querySelector('input[name="q1"]:checked').value
        },
        {  
            "id": 2,
            "xWeight": 0.6,
            "yWeight": -0.3,
            "value": document.querySelector('input[name="q2"]:checked').value
        },
        {
            "id": 3,
            "xWeight": -0.8,
            "yWeight": -0.3,
            "value": document.querySelector('input[name="q3"]:checked').value
        },
        {
            "id": 4,
            "xWeight": -0.5,
            "yWeight": 0.8,
            "value": document.querySelector('input[name="q4"]:checked').value
        },
        {
            "id": 5,
            "xWeight": 0.3,
            "yWeight": -0.4,
            "value": document.querySelector('input[name="q5"]:checked').value
        },
        {  
            "id": 6,
            "xWeight": 0.1,
            "yWeight": 0.9,
            "value": document.querySelector('input[name="q6"]:checked').value
         },
         {  
             "id": 7,
             "xWeight": 0.8,
             "yWeight": -0.1,
             "value": document.querySelector('input[name="q7"]:checked').value
         },
         {
             "id": 8,
             "xWeight": -0.8,
             "yWeight": 0.3,
             "value": document.querySelector('input[name="q8"]:checked').value
         },
         {
             "id": 9,
             "xWeight": -0.2,
             "yWeight": -0.7,
             "value": document.querySelector('input[name="q9"]:checked').value
         },
         {
             "id": 10,
             "xWeight": -0.2,
             "yWeight": 0.2,
             "value": document.querySelector('input[name="q10"]:checked').value
         },
         {
             "id": 11,
             "xWeight": -0.4,
             "yWeight": -0.1,
             "value": document.querySelector('input[name="q11"]:checked').value
         },
         {
             "id": 12,
             "xWeight": 0.2,
             "yWeight": -0.4,
             "value": document.querySelector('input[name="q12"]:checked').value
         },
         {
             "id": 13,
             "xWeight": -0.2,
             "yWeight": -0.4,
             "value": document.querySelector('input[name="q13"]:checked').value
         },
         {
             "id": 14,
             "xWeight": 0.4,
             "yWeight": -0.4,
             "value": document.querySelector('input[name="q14"]:checked').value
         },
         {
             "id": 15,
             "xWeight": 0.6,
             "yWeight": 0.2,
             "value": document.querySelector('input[name="q15"]:checked').value
         }                           
    ]
    
    let xSum = 0;
    let ySum = 0;

    // Suma všech odpovědí*váha
    answers.forEach(answer => {
         xSum += answer.value * answer.xWeight;
         ySum += answer.value * answer.yWeight;
     });

    let xNormalized = 0;
    let yNormalized = 0;
    
    // Normalizace souřadnic
    answers.forEach(answer => {
        xNormalized += Math.abs(answer.xWeight * 2);
        yNormalized += Math.abs(answer.yWeight * 2)
    });

    //console.log(xSum,ySum,xNormalized,xNormalized);

    xNormalized = 10*xSum/xNormalized;
    yNormalized = 10*ySum/yNormalized;
    //console.log(xNormalized);
    return [xNormalized, yNormalized];

}

function scrollToTop() {
    window.scrollTo({
      top: -500,
      behavior: 'smooth'
    });
}

function getSoulmate(x,y) {
    const soulmates = [  
        {  
           "id": 1,
           "img": "img/bulbasaur.jpg",
           "text": "Jsi bulbasaur - klidnej borec kterýho jen tak nic nevyvede z míry. Během zápasu radši felíš na střídačce a popijíš matonku než aby ses nějak hrnul do zápasu. po zapase stejně nahajpuješ pivka a panaky a to se počítá"
        },
        {  
            "id": 2,
            "img": "img/pikachu.jpg",
            "text": 'Jsi pikachu - ten poměrně otravnej typeček, kterej vybouchne při jakykoliv situaci. Kdybys hral za duto duto, je pruměr červených karet na zápas tak 4,36. Nemáš rád drobný podnikatele který se snaží živit tím, že okrádaj trenery pokemonu o jejich kapesný/pokemony'
        },
        {
            "id": 3,
            "img": "img/geodude.jpg",
            "text": "Jsi geodude - prostě baller, máš rád když to valí, z prahy si se radši odstěhoval protože tě tady všici srali. Jednou za rok zajdeš na duto duto akci aby ostatní viděli že existuješ. Jsou vysoký šance že doma po večerech vyrabíš nějakyho krypto bota nebo prohlašuješ že nejlepší pivo je kozel"
        },
        {
            "id": 4,
            "img": "img/squirtle.jpg",
            "text": "Jsi squirlte - společenský čávo co si nenechá srát na hlavu, kterýmu když přijede do města nějakej kid, tak ho se svým gangem vyštve z města. Zaroven jsi vůdčí typ, takže pokud furt nejsi kapitan duto duto, kde je chyba?!>:("
        },
        {
            "id": 5,
            "img": "img/charmander.jpg",
            "text": "Jsi charmander - nic moc tě nezajímá, za duto duto radši nehraješ protože se bojíš vostrejch borců a na pivko nepřijdeš. Máš v kapse připravenejch vždycky asi 106 vymluv proč nemužeš. jo a bydlíš v Legerce a nepořadáš parties.  "
        }        
    ] 

    console.log(x,y);
    if (x <= -0.5 && y >= 0.5) {
       //charmander
        img = soulmates.find(soulmate => soulmate.id === 5).img;
        text = soulmates.find(soulmate => soulmate.id === 5).text;
    } else if (x <= -0.5 && y <= -0.5) {
        //bulbasaur
        img = soulmates.find(soulmate => soulmate.id === 1).img;
        text = soulmates.find(soulmate => soulmate.id === 1).text;
    } else if (x >= 0.5 && y <= -0.5) {
        //squirtle
        img = soulmates.find(soulmate => soulmate.id === 4).img;
        text = soulmates.find(soulmate => soulmate.id === 4).text;
    } else if (x >= 0.5 && y >= 0.5) {
        //pikachu
        img = soulmates.find(soulmate => soulmate.id === 2).img;
        text = soulmates.find(soulmate => soulmate.id === 2).text;
    } else if (x <= 0.5 && y <= 0.5 && x>= -0.5 && y>= -0.5) {
        //baller - asi geodude
        img = soulmates.find(soulmate => soulmate.id === 3).img;
        text = soulmates.find(soulmate => soulmate.id === 3).text;
    }

    console.log(img,text);
    return [img, text]; 
}
  

function drawGraph() {
      
    // Procházení všech radio buttonů na stránce a seskupení podle jejich name atributu
    const radioGroups = {};
    const allRadioButtons = document.querySelectorAll('input[type="radio"]');
    allRadioButtons.forEach(radio => {
        const groupName = radio.getAttribute('name');
        if (!radioGroups[groupName]) {
            radioGroups[groupName] = [];
        }
        radioGroups[groupName].push(radio);
    });
      
    // Kontrola, zda je vybrán alespoň jeden z každé skupiny
    let allGroupsSelected = true;
    Object.keys(radioGroups).forEach(groupName => {
        const checkedRadios = radioGroups[groupName].filter(radio => radio.checked);
        if (checkedRadios.length === 0) {
            allGroupsSelected = false;
        }        
    });

    // alert
    if (allGroupsSelected === false) {
        window.alert('Nejdřív vyplň odpověďi na všechny otázky!');
        return;
    }
    
  document.getElementById('questions').style.display = 'none';

     const graph = document.getElementById('svg-graph');
    const width = graph.getAttribute('width');
    const height = graph.getAttribute('height');

    // draw x axe
    const axeX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axeX.setAttribute('x1', '60');
    axeX.setAttribute('y1', height / 2);
    axeX.setAttribute('x2', width - 60);
    axeX.setAttribute('y2', height / 2);
    axeX.setAttribute('stroke', 'black');
    graph.appendChild(axeX);
    // draw y axe
    const axeY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axeY.setAttribute('x1', width / 2);
    axeY.setAttribute('y1', '60');
    axeY.setAttribute('x2', width / 2);
    axeY.setAttribute('y2', height - 60);
    axeY.setAttribute('stroke', 'black');
    graph.appendChild(axeY);

    // negative x img label
    const imgLabelX1 = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    imgLabelX1.setAttribute('x', '0');
    imgLabelX1.setAttribute('y', height / 2 - 40);
    imgLabelX1.setAttribute('width', '120');
    imgLabelX1.setAttribute('height', '104');
    const imgX1 = document.createElement('img');
    imgX1.setAttribute('src', 'img/tofu.png');
    imgX1.setAttribute('width', '120');
    imgX1.setAttribute('height', '104');
    imgX1.setAttribute('x', '0');
    imgX1.setAttribute('y', height / 2 - 40);    
    imgLabelX1.appendChild(imgX1);
    graph.appendChild(imgLabelX1);
    // negative x text label
  const labelX1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    labelX1.setAttribute('x', '60');
    labelX1.setAttribute('y', height / 2 - 30);
    labelX1.setAttribute('text-anchor', 'middle');
    labelX1.textContent = 'Introvert';//'Levice';
    graph.appendChild(labelX1); 
    // positive x img label
    const imgLabelX2 = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    imgLabelX2.setAttribute('x', width - 80);
    imgLabelX2.setAttribute('y', height / 2 - 20);
    imgLabelX2.setAttribute('width', '80');
    imgLabelX2.setAttribute('height', '45'); 
    const imgX2 = document.createElement('img');
    imgX2.setAttribute('src', 'img/beef.png');
    imgX2.setAttribute('width', '80');
    imgX2.setAttribute('height', '45'); 
    imgLabelX2.appendChild(imgX2);
    graph.appendChild(imgLabelX2);
    // positive x text label
    const labelX2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    labelX2.setAttribute('x', width - 40);
    labelX2.setAttribute('y', height / 2 - 30);
    labelX2.setAttribute('text-anchor', 'middle');
    labelX2.textContent = 'Extrovert';//'Pravice';
    graph.appendChild(labelX2);   
    // positive y img label 
    const imgLabelY1 = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    imgLabelY1.setAttribute('x', width / 2 - 40);
    imgLabelY1.setAttribute('y', '30');
    imgLabelY1.setAttribute('width', '81');
    imgLabelY1.setAttribute('height', '80');
    const imgY1 = document.createElement('img');
    imgY1.setAttribute('src', 'img/coat.png');
    imgY1.setAttribute('width', '81');
    imgY1.setAttribute('height', '80');
    imgLabelY1.appendChild(imgY1);
    graph.appendChild(imgLabelY1);    
    // positive y text label
    const labelY1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    labelY1.setAttribute('x', width / 2);
    labelY1.setAttribute('y', '20');
    labelY1.setAttribute('text-anchor', 'middle');
    labelY1.textContent = 'Labilní';
    graph.appendChild(labelY1);
    // negative y img label
    const imgLabelY2 = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    imgLabelY2.setAttribute('x', width / 2 - 35);
    imgLabelY2.setAttribute('y', height - 95);
    imgLabelY2.setAttribute('width', '71');
    imgLabelY2.setAttribute('height', '70');
    const imgY2 = document.createElement('img');
    imgY2.setAttribute('src', 'img/hoodie.png');
    imgY2.setAttribute('width', '71');
    imgY2.setAttribute('height', '70');
    imgLabelY2.appendChild(imgY2);
    graph.appendChild(imgLabelY2);    
    // negative y text label
    const labelY2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    labelY2.setAttribute('x', width / 2);
    labelY2.setAttribute('y', height - 5);
    labelY2.setAttribute('text-anchor', 'middle');
    labelY2.textContent = 'Stabilní';
    graph.appendChild(labelY2); 
    
    document.getElementById('svg-graph').style.display = 'inline-block';
    document.getElementById('soulmate').style.display = 'flex';
   
    const [xCoord, yCoord] = processAnswers();
    drawPoint(xCoord, yCoord);

    const [soulmateImg,SoulmateText] = getSoulmate(xCoord,yCoord);
    document.getElementById('soulmate-img').src = soulmateImg;
    document.getElementById('soulmate-text').textContent = SoulmateText;

    scrollToTop();
}

window.addEventListener('load', function() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
});

