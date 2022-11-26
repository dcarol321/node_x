const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'a9a63795-54d2-44ba-a2e6-05cedee5c4a7'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
