function externalFile(){
    console.log('hello from external file');
}

externalFile()

function navigatorInfo(){
    console.log(window.navigator.platform);
    console.log(window.navigator.vendor);
    console.log(window.navigator.appVersion);
    }
    
    navigatorInfo()
    
    function isOnlineOrNot(){
        if(window.navigator.onLine){
            console.log('online');
        } else console.log('offline');
    }
    
    isOnlineOrNot()
    
    function widthAndHeight(){
        console.log(window.screen.availHeight);
        console.log(window.screen.availWidth);
        console.log(window.screen.height);
    }

    widthAndHeight()
    
    function locationInfo(){
        console.log(window.location.href);
        console.log(window.location.hostname);
        console.log(window.location.protocol);
        console.log(window.location.port);
    }
    
    locationInfo()
    
    
    function reloadPage(){
    window.location.reload()
    }

    //reloadPage()
    
    
    function redirect (page) {
        window.location.href = page;
      };
    
     // redirect('https://www.youtube.com/')
    
    function setStorage(key, value){
        return window.localStorage.setItem(key, value)
    }
    setStorage('some key', 'some value')
    
    function getStorage(key){
        return window.localStorage.getItem(key)
    
    }
    console.log(getStorage('some key'))
    
    
    function removeData(key, value) {
        return window.localStorage.removeItem(key,value);
      }

         removeData('some key', 'some value')

      function checkLocal (key) {
        let localStorageData = window.localStorage.getItem(key);
        if (localStorageData) {
            console.log(localStorageData);
        }
        else console.log('There is no data');
      };

    checkLocal('some key')
    
    function setSession(){
        
        window.sessionStorage.setItem('some key', 'some value')
    }
    setSession()
    
    function getSession(){
        console.log(window.sessionStorage.getItem('some key'))
    
    }
    getSession()

    
    function removeDataSession() {
        return window.sessionStorage.clear();
      }

         removeDataSession()

    
    
    function twoPagesBack(){
        window.history.back()
        window.history.back()
    }
    // twoPagesBack()
    
    alert('Hello User')
    
    let ques = prompt('Are you first time on this site?');
    
    let confirm = function ()  {
        if (ques) {
      alert(
      'We will submit this this answer now ' + ques);
    } }

    confirm()

    
if (confirm) {
    alert("Success. Welcome");
  }

    let output=[];
    let output2=[];
    let output3=[];
    let output4=[];
    
   
    function randomFunc(min, max) {
        let newArr= []
        for( let i = 0; i < 10; i++){
        newArr.push(Math.random() * (max - min)+ 1 ) + min; 
        }
        return newArr
 }
       console.log(randomFunc(10, 50)) 




       function roundToDecimals(arr) {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
          newArr[i] = Math.round(arr[i] * 100) / 100;
        }
        console.log(newArr)
        return newArr;
      }
      let input = randomFunc(10,50);
      console.log(roundToDecimals(input))



    function floorFunc(min,max) {
        let newArr= []
    for (let i = 0; i < 10; i++) {
        newArr.push(Math.floor(Math.random() * (max - min)+ 1 ) ) + min; 
    }
        
   return newArr
    }
        console.log(floorFunc(10,50))   
        
    

   function maxNumber(array) {
     let maxNum = Math.max(...array)
     return maxNum
     }

    console.log(maxNumber([2,4,7])) 


    let wholeDate=new Date();
    let time= timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
    let date= timeNow.getFullYear()+'-'+(timeNow.getMonth()+1)+'-'+timeNow.getDate()
    
    console.log(wholeDate)
    console.log(time)
    console.log(date)
    
   
// Imam samo jedno pitanje: da li ti je stranica djuskala kada si pokrenula sve ove funkcije u skripti? :D 
