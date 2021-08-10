{
  /**
   * TRUE = λx.λy.x
   * The above encoding for the boolean 'TRUE' returns the first expression
  */

  const TRUE = (x: any) => {
    return (y: any) => x
  }

  console.log(TRUE('This is true')('This is false'))

  /**
   * FALSE = λx.λy.y
   * The above encoding for the boolean 'FALSE' returns the second expression
   */

  const FALSE = (x: any) => {
    return (y: any) => y
  }

  console.log(FALSE('This is true')('This is false'))

  /**
   * IF = λp.λt.λf.p t f
   * The above is encoding for the function 'IF'
   * p is the predicate clause
   * t evaluates to 'then clause' if p evaluates to true
   * f evaluates to 'else clause' if p evaluates to false
  */

  // For now we leave the client to determine the value of the predicate
  const IF = (predicateStatement: any, predicateValue: boolean) => {
    console.log(predicateStatement)
    return (thenClause: any) => {
      console.log(`${predicateValue ? TRUE(thenClause)('') : ''}`)
      return (elseClause: any) => {
        console.log(`${!predicateValue ? FALSE('')(elseClause) : ''}`)
      }
    }
  }

  console.log(IF('3 > 2', true)('Then do this')('Else do this'))
  console.log(IF('3 < 2', false)('Then do this')('Else do this'))
}
