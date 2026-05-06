async function* generateData() {
  yield "A";
  yield "B";
}

const func = async () => {
  
  let data = generateData()
  console.log(await data.next())
}

func()