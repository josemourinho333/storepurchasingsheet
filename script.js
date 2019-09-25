const menu = document.querySelector("#siteMenu");
const newMenuItem = document.createElement('li');
const newMenuItemHeader = document.createElement('h1');
newMenuItemHeader.innerHTML = 'Store Purchasing';
newMenuItemHeader.setAttribute('id', 'newPurchasing');
newMenuItem.appendChild(newMenuItemHeader);
menu.appendChild(newMenuItem);

const workSpace = document.querySelector("#workspace");
const newPurchasingSpace = document.createElement('div');
newPurchasingSpace.setAttribute('id', 'newPurchasingSpace');
newPurchasingSpace.setAttribute('style', 'display: none');
newPurchasingSpace.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';

const addNew = document.createElement('button');
addNew.setAttribute('id', 'addNew');
addNew.innerHTML = 'Add';
addNew.style.gridColumnStart = 1;
addNew.style.gridColumnEnd = 7;
newPurchasingSpace.appendChild(addNew);

const refreshAll = document.createElement('button');
refreshAll.setAttribute('id', 'refreshAll');
refreshAll.innerHTML = 'Refresh';
refreshAll.style.gridColumnStart = 1;
refreshAll.style.gridColumnEnd = 7;
newPurchasingSpace.appendChild(refreshAll);

const labelHouse = document.createElement('div');
labelHouse.setAttribute('id', 'labelHouse');
labelHouse.setAttribute('style', 'display: grid');
labelHouse.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
newPurchasingSpace.appendChild(labelHouse);

function addCopyEvent() {
    setTimeout(function() {
        const copyButtons = document.querySelectorAll('.copyBtn');
        const textArea = document.querySelectorAll('.textArea');
        Array.from(textArea);
        for (var i = 0; i < copyButtons.length; i++) {
            let buttonIndex = copyButtons[i];
            let textAreaIndex = textArea[i];
            buttonIndex.addEventListener('click', function() {
                textAreaIndex.focus();
                textAreaIndex.select();
                document.execCommand('copy');
            });
        };
    }, 500);
};

function addRefreshEvent() {
    setTimeout(function() {
        const refreshButtons = document.querySelectorAll('.refreshBtn');
        const textArea = document.querySelectorAll('.textArea');
        Array.from(textArea);
        for (var i = 0; i < refreshButtons.length; i++) {
            let buttonIndex = refreshButtons[i];
            let textAreaIndex = textArea[i];
            buttonIndex.addEventListener('click', function() {
                textAreaIndex.value = '';
            });
        };
    }, 500);
};

function addCloseEvent() {
    setTimeout(function() {
        const addCloseEventBtns = document.querySelectorAll('.closeBtn');
        console.log(addCloseEventBtns);
        for (var i = 0; i < addCloseEventBtns.length; i++) {
            let closeBtnIndex = addCloseEventBtns[i];
            closeBtnIndex.addEventListener('click', function() {
                closeBtnIndex.parentElement.remove();
            });
        };
    }, 500);
};


//adding new text area for working, prompts for a disti name and sets it as div class and textarea name
function addNewTextArea () {
    const distiName = prompt('Please enter the disti name', '');
    if (distiName != null) {

        let labelContainer = document.createElement('div');
        labelContainer.setAttribute('class', 'labelContainer');

        let label = document.createElement('div');
        label.setAttribute('class', distiName);
        label.innerHTML = distiName;

        let copyBtn = document.createElement('button');
        copyBtn.setAttribute('class', 'copyBtn');
        copyBtn.setAttribute('id', distiName);
        copyBtn.innerHTML ='Copy';

        let refreshBtn = document.createElement('button');
        refreshBtn.setAttribute('class', 'refreshBtn');
        refreshBtn.setAttribute('id', distiName);
        refreshBtn.innerHTML = 'Clear';

        let closeBtn = document.createElement('button');
        closeBtn.setAttribute('class', 'closeBtn');
        closeBtn.setAttribute('id', distiName);
        closeBtn.innerHTML = 'X';
        
        let textArea = document.createElement('textarea');
        textArea.setAttribute('name', distiName);
        textArea.setAttribute('class', 'textArea');
        textArea.setAttribute('id', distiName);
        textArea.setAttribute('rows', '15');
        textArea.setAttribute('cols', '34');
        
        labelContainer.appendChild(label);
        labelContainer.appendChild(copyBtn);
        labelContainer.appendChild(refreshBtn);
        labelContainer.appendChild(closeBtn);
        labelContainer.appendChild(textArea);
        labelHouse.appendChild(labelContainer);
    };

    addCopyEvent();
    addRefreshEvent();
    addCloseEvent();

};

function refreshAllTextArea() {
    const labels = document.querySelectorAll('.labelContainer');
    const labelArray = Array.from(labels);
    const house = document.getElementById('labelHouse');
    if (labelArray.length > 0) {
        house.innerHTML = '';
    }
};

workSpace.insertBefore(newPurchasingSpace, workSpace.childNodes[0]);

function showPurchasing () {
    let dashPanel = document.querySelector("#workspace > div.dash");
    let purchasingSpace = document.getElementById('newPurchasingSpace');
    if (dashPanel.style.display == 'none') {
        dashPanel.style.display = 'flex';
        purchasingSpace.style.display = 'none';
    } else {
        dashPanel.style.display = 'none';
        purchasingSpace.style.display = 'grid';
    }
};



const storePurchasing = document.getElementById('newPurchasing');
storePurchasing.addEventListener('click', showPurchasing);

const addNewArea = document.getElementById('addNew');
addNewArea.addEventListener('click', addNewTextArea);

const refreshAllArea = document.getElementById('refreshAll');
refreshAllArea.addEventListener('click', refreshAllTextArea);
