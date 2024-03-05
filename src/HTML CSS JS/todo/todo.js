const tasksEl = document.getElementById('tasks')
const input = document.getElementById('input')

input.focus()

input.addEventListener('keyup',(e)=>{
	createTask(e.target.value)
})
function createTask(inp) {
	const tasks = inp.split(',').filter(task => task.trim()!=='').map(task=>task.trim())
	
	tasksEl.innerHTML=''

	tasks.forEach(task => {
		const taskEl = document.createElement('span')
		taskEl.classList.add('task')
		taskEl.innerText=task
		tasksEl.appendChild(taskEl)
	})
}