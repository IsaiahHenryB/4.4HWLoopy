// // 1
// const sum  = (num1,num2) =>{
//     let sum = num1 + num2;
//     return sum
// }
// console.log(sum(4,7))
// // 2
// const syllables = (str) =>{
//     let num = 0
//     str=str.toLowerCase()
//     for(let i=0; i<str.length; i++){
        
//         if(((str.length > 0 )&&(str[i]!=='a'&& str[i]!=='e'&& str[i]!=='i'&& str[i]!=='o'&& str[i]!=='u')) && (str[i+1]==='a'||str[i+1]==='e'||str[i+1]==='i'||str[i+1]==='o'||str[i+1]==='u'|| str[i+1]==='y')){
//                 num++
//         }
//     }
//     if((str[0]==='a'||str[0]==='e'||str[0]==='i'||str[0]==='o'||str[0]==='u')){
//         num++
//     }
//     return num
// }
// console.log(syllables("hippopotamus"))
// console.log(syllables("insinuate"))
// console.log(syllables("this is really hard"))
// // This don't work for syllables within a word comprised of multiple vowels :(
// // 3
// const addLower = (num) =>{
//     for(let i=num; i>=0; i--){
//         num = num + i
//     }
//     return num
// }
// console.log(addLower(10))
// // 4
// const string = (str) =>{
//     for(let char of str){
//         console.log(char)
//     }
// }
// string("greasy")
// // 5
// const caseSwitch = (str) =>{
//     let i=0
//     let u=0
//     let l=0
//     for(let index of str){
//         if(str[i]===str[i].toUpperCase()){
//             str[i].toLowerCase();
//             if(u===str.length-1){
//                 return `Upper`
//             }
//             u++
//         }
//         if(str[i]===str[i].toLowerCase()){
//             str[i].toUpperCase();
//             if(l===str.length-1){
//                 return `Lower`
//             }
//             l++
//         }
//         i++
//     }
//     return `Mixed`
// }
// console.log(caseSwitch("Norman"))
// console.log(caseSwitch("norman"))
// console.log(caseSwitch("NORMAN"))
// // 6
// const guess = (num) =>{
    
//         for(let tries = 0; tries>=0;tries++){
//         num = prompt(`guess my number 1-10`)
//         if( num>7){
//             alert(`${num} is too high`)
//         }
//         else if( num<7){
//             alert(`${num} is too low`)
//         }
//         else if( num==7 && tries===0){
//             tries++
//             alert(`CORRECT!! it took you ${tries} try!`)
//             return
//         }
//         else if( num==7 && tries>0){
//             tries++
//             alert(`CORRECT!! it took you ${tries} tries!`)
//             return
//         }
//         else{
//             alert(`please enter a number`)
//         }
//     }
// }
// // 7
// const determineNum = ()=>{
//     for(let i=0; i<=25; i++){
//         if (i%2===0) {
//             console.log(`${i} is even`)
//         }
//         else if (i%2===1) {
//             console.log(`${i} is odd`)
//         }
//     }
// }
// determineNum()
// // 8
// const books = ()=>{
//     for(let i=80; i>=0;i--){
//         if(i<=80 && i>0){
//             console.log(`there is only space for ${i} books!`)
//         }
//         else if(i===0){
//             console.log(`There's no more space for books. Stash your books elsewhere!`)
//         }
//     }
// }
// books()
// // 9
// const asterisk = () =>{
//     let row = `************`
//     let c = 0
//     for(let i=0; i<6; i++){
//         console.log(row)
//         c++
//     }
//     console.log(`the width is ${row.length} and the height is ${c}`)
// }
// asterisk()
// // I Don't know what's being asked here to be honest ^^^
// // 10
// const oddUppercase = (str)=>{
//     str=prompt(`give a word`)
//     document.getElementById('odd').innerHTML = ``
//     for(let i=0; i<str.length; i++){
//         if(i%2 === 0){
//             document.getElementById('odd').innerHTML += (str[i].toUpperCase())
//         }
//         else{
//             document.getElementById('odd').innerHTML += (str[i])
//         }
//     }
// }
// // 11
// const bigger = (num1,num2) =>{
//     if(num1>num2){
//         console.log(num1)
//     }
//     else if(num2>num1){
//         console.log(num2)
//     }
// }
// bigger(4,7)
// // 12
// const lowToHigh = (num1,num2,num3) =>{
//     for(i=0; i <= (num1+num2+num3); i++){
//         if(i===num1){
//             console.log(num1)
//         }
//         else if(i===num2){
//             console.log(num2)
//         }
//         else if(i===num3){
//             console.log(num3)
//         }
//     }
    
// }
// lowToHigh(9,5,10)
// lowToHigh(1675,9006,7908)
// // 13
// const removeVowel = (str)=>{
//     document.getElementById('letters').innerHTML = ``
//     str = prompt(`enter a word with vowels`)
//     str = str.toLowerCase()
//     for(let char of str){
//         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//             document.getElementById('letters').innerHTML += ``
//         }
//         else{
//             document.getElementById('letters').innerHTML += char
//         }
//     }
// }