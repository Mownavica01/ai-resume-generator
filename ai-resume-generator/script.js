async function generateResume() {

  let skills = document.getElementById("skills").value;

  let response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer vidhyamowni1015"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Write a professional resume summary for a student with skills: ${skills}`
        }
      ]
    })
  });

  let data = await response.json();

  document.getElementById("output").innerText =
    data.choices[0].message.content;
}