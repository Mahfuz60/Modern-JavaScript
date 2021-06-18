var javaScript={
    name:'javaScript',
    libraries:['vue js','angular','react js','node js'],
    printLibraries:function(){
        this.libraries.forEach((a)=>{
            console.log(`${this.name} loves ${a}`)

        })

    }

}
javaScript.printLibraries();