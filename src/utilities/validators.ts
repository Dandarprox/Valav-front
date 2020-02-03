export function validObjectFields(obj: { [key: string]: any }) {
  for (const key in obj) {
    const element = obj[key];
    if ( element == 0 ||
         element == '' ||
         element == null ) {
          return false;
       }
  }

  return true;
}
