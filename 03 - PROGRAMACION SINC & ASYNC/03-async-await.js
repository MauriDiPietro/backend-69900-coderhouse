const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por 0");
    else resolve(a / b);
  });
};

const division = async (a, b) => {
  try {
    return await divisionPromesa(a, b);
  } catch (error) {
    console.log(error);
  }
};

const test = async () => {
  console.log(await division(1, 0));
};

test()


const getApi = async() =>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(await res.json());
    } catch (error) {
        console.log(error);
    }
}

const getInfoUser = async(username) => {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        console.log(await res.json());
    } catch (error) {
        console.log(error);
    } finally {
        console.log('finalizó');
    }
}

// getApi()
getInfoUser('MauriDiPietro')