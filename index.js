async function getQueryAnswer(){
        try {
          const divRef = document.querySelector("#cars");
             const queryInputRef = document.querySelector("#query");
             const query = queryInputRef.value;
             const res = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
                {
    "contents": [
      {
        "parts": [
            {
                text:"You are a cars dealer and know about cars, if other thing is asked said query is wrong",

            },
          {
            text: query,
          },
        ],
      },
    ],
  },
  {
    headers: 
  {  "X-goog-api-key":"AIzaSyApmncPeFD46sQx80XS9ioN7RGnXQrM9UM",
    "Content-Type":" application/json",
},

  }
             );
             const answer = res.data.candidates[0].content.parts[0].text;
             divRef.innerHTML = answer;
            

        } catch (err){
            alert("Something went wrong");
        }
    }
    
    