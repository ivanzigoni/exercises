// const array = ["dog", "racecar", "car"]
const array = ["flower", "flow", "flight"]
// const array = ["","b"]
// const array = ["ab", "a"]
// const array = ['a', 'a'];
// const array = ['a'];
// const array = ["reflower","flow","flight"];

function prefix(strs) {
	if (strs.length === 0) return "";
	let prefix = strs[0];

	for (let i = 1; i < strs.length; i += 1) {
	
		while (strs[i].indexOf(prefix) != 0) {

			prefix = prefix.substring(0, prefix.length - 1);
			if (prefix.length === 0) return "";
		}

	}
	return prefix;
}


console.log(
	prefix(array),
	// 'flight'.indexOf('flow'),
	// 'flower'.substring(0, 'flower'.length - 1)
	)

	/*
	considerado que o indexOf() retorna -1 caso não ache o match dentro da string target,
	enquanto ele não retornar 0, que representa o começo de uma sequência válida de matches
	começando no index 0, uma letra é retirada do final do output (prefix), até que 
	ache uma sequência válida.
	*/