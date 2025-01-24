// type Person = {
//     names: string; 
//     age: number;
//     occupation: string; 
//     isEmployed: boolean;
//     hobbies: (string|number)[];
//     address: {street: string, city: string, state: string};
//     vacation_location_value?: String;
//     vacation_price_value?: String;
//   };

//   //Interface PersonInterface is like Type Person
//   interface PersonInterface{
//     names: string; 
//     age: number;
//     occupation: string; 
//     isEmployed: boolean;
//     hobbies: (string|number)[];
//     address: {street: string, city: string, state: string}};


//   const name: string = "Cam Doooodoo";
//   let occupation: string ="Software Developer";
//   const age: number = 30;
//   let isEmployed: boolean = true;
//   const hobbies: (string|number)[] = ["Reading", "Coding", "Traveling", 4];
//   const address: {street: string, city: string, state: string} = {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY",
//   };
//   const secondAddress = {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY",
//   } as typeof address;

//   const person: PersonInterface = {
//     names: name, 
//     age,
//     occupation,
//     isEmployed,
//     hobbies,
//     address,
//   };

//   const person2: Person = {
//     names: "Josh Dooo",
//     age: 25, 
//     occupation: "Doctor", 
//     isEmployed: true, 
//     hobbies: ["Reading", "Traveling"], 
//     address: {street: "123 Main St", city: "New York", state: "NY"},
//     vacation_location_value: "Paris",
//     vacation_price_value: "1000"
//   };

//   const personlist = [person, person2];

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.title}>
//          Hi {person.names}.  
//         </Text>
//       </View>   
//       <Text style={styles.text}>
//         Your flight to {person2.vacation_location_value} will take off soon.
//          {person.names} loves {hobbies[0]} and {hobbies[1]}. He also lives in {address.city}, {address.state}, {address.street}. 
//          The next person {personlist[1].names} price for flying will be ${person2.vacation_price_value} to {person2.vacation_location_value}.
//       </Text>

//       <View>
//         <TouchableOpacity 
//           onPress={() => {
//             alert("weekend is the best");
//       }}
//       >
//           <Text style={styles.alertText}>Click me</Text>
//         </TouchableOpacity>
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title:{
//     fontSize:37,
//     fontWeight: 'bold',
//   },
//   text:{
//     fontSize: 15,
//     color: 'white',
//     padding: 20,
//   },
//   alertText:{
//     fontSize: 15,
//     color: 'red',
//     padding: 10,
//   }
// });
