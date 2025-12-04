const skillList = document.getElementById('skills-list'); 
const skillInput = document.getElementById('new-skill-input'); 
const addButton = document.getElementById('add-skill-button'); 

addButton.addEventListener('click', function() { 

    const newSkillText = skillInput.value.trim(); 

    if (newSkillText !== "") { 

        const newListItem = document.createElement('li');
        newListItem.textContent = newSkillText;

        skillList.appendChild(newListItem);

        skillInput.value = '';
    } 
});