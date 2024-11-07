document.getElementById('urlCheckForm').addEventListener('submit', function(event) {  
    event.preventDefault();  
    
    const urlInput = document.getElementById('urlInput').value;  
    const resultMessage = document.getElementById('resultMessage');  
    const resultDiv = document.getElementById('result');  

  
    if (urlInput.includes("www.")) {  
        resultMessage.innerText = "✅ Safe: This URL appears to be legal.";   
    } else {  
        resultMessage.innerText = "⚠️ Warning: This URL is not safe!!";
    }  

    resultDiv.classList.remove("hidden");  
}); 


document.getElementById('resetButton')?.addEventListener('click', function() {  
    document.getElementById('urlInput').value = '';  
    document.getElementById('result').classList.add("hidden");  
});