let casosTeste = [
   'Miritiba 339',
   'Babaçu 500',
   'Cambuí 804B',
   'Rio Branco 23',
   'Quirino dos Santos 23 b',
   '4, Rue de la République',
   '100 Broadway Av',
   'Calle Sagasta, 26',
   'Calle 44 No 1991',
];

function separador(entradaEndereco) {
   let endereco;
   let enderecoNome = '';
   let enderecoNumero = '';
   let enderecoFinal = ['', ''];

   endereco = entradaEndereco.replace(',', '').split(' ');

   for (let i = 0; i < endereco.length; i++) {
      const regexNum = /[0-9]+/;
      const regexLet = /[A-z]/;
      let palavras =
         endereco[i].toLowerCase() === 'no' ||
         endereco[i].toLowerCase() === 'n' ||
         endereco[i].toLowerCase() === 'n°' ||
         endereco[i].toLowerCase() === 'numero' ||
         endereco[i].toLowerCase() === 'número';

      if ((i === 0 || i === endereco.length - 1) && regexNum.test(endereco[i])) {
         enderecoNumero += endereco[i];
      } else if (
         i === endereco.length - 2 &&
         regexNum.test(endereco[i]) &&
         regexLet.test(endereco[i + 1])
      ) {
         enderecoNumero += endereco[i];
         i++;
         enderecoNumero += ` ${endereco[i]}`;
         console.log(endereco[i], endereco[i - 1]);
      } else if (i === endereco.length - 2 && palavras) {
         enderecoNumero += `${endereco[i]} `;
         console.log([endereco[i + 1]]);
      } else {
         enderecoNome += `${endereco[i]} `;
      }
   }

   enderecoFinal[0] = enderecoNome;
   enderecoFinal[1] = enderecoNumero;
   console.log(enderecoFinal);

   return enderecoFinal;
}

function exibirResultados() {
   let resultados = [];

   for (i = 0; i < casosTeste.length; i++) {
      resultados.push(separador(casosTeste[i]));
   }

   console.log(resultados);

   // Exibe os resultados na página HTML
   document.getElementById('resultadosConteudo').innerHTML = resultados
      .map((resultado) => `<p>${resultado}</p>`)
      .join('');
}

// Adiciona um event listener de clique no botão
document.getElementById('botaoCasos').addEventListener('click', exibirResultados);

// Adiciona um event listener de clique para outro botão específico
document.getElementById('entrada').addEventListener('click', function () {
   document.getElementById('enderecoHtml').innerHTML = separador(
      document.getElementById('endereco').value
   );
});
