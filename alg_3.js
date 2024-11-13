/**Algoritmo 3 */
const estudantes = [            /**Array de objetos */
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
   
   
   const estudantesMedias = estudantes.map((estudante) => {                    /**map vai percorrer a lista de objetos,
                                                                                e uma constante é declarada, ela recebe
                                                                                as notas dos estudantes e o método reduce
                                                                                é utilizado para somar as notas, é coletado
                                                                                o nome dos estudantes e o retorno
                                                                                é o nome dos estudantes com suas respectivas medias*/
    const total = estudante.notas.reduce((soma, nota) => soma + nota);
    let {nome} = estudante;
    return { nome, media: total / estudante.notas.length };
   });
   
   
   const melhoresMedias = estudantesMedias.filter(                      /**aqui o código filtra os estudantes com media 
                                                                        acima de 90 */
    (student) => student.media > 90,                        
   );
   
   