$("#form").submit(function(e){
    e.preventDefault()

    var query=$("#search").val()

    let result=''

    var API_KEY=`12330e6bf09850382898a2a7f28b7e5c`

    var url="http://api.serpstack.com/search?access_key="+API_KEY+"&type=web&query="+query
    console.log(url)

    $.get(url,function(data){

        $("#result").html('')
        console.log(data)

        data.organic_results.forEach(res=>{
           result=`
              <h1>${res.title}</h1><br><a target="_blank href="${res.url}">${res.url}</a>
              <p>${res.snippet}</p>
           `

           console.log(result)

           $("#result").append($(result))
        });
    })

})