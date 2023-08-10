// import { EditOption, EditSelect } from "@/components/Profile/styles/styled.ChangeInfo";
// import { useQuery } from "@tanstack/react-query";

// interface City {
//     id: number;
//     name: {
//         [key: string]: string;
//       };
//     state_id: number;
//     state: {
//         id: number;
//         image: string;
//         name: {
//             [key: string]: string;
//         };
//         nationality: {
//             [key: string]: string;
//         };
//         key: string;
//         code: string;
//     };
// }

// const Citieslist = () => {

//     async function fetchCities(): Promise<{ data: City[] }> {
//         const response = await fetch(`${process.env.GET_CITIES_URL}`);
//         const data = await response.json();
//         // console.log(data);
//         return data.data;

//     }

//     const {
//         data: cities,
//         isLoading: isLoadingCities,
//         isError: isErrorCities,
//     } = useQuery<{ data: City[] }>(["cities"], fetchCities);

//     if (isLoadingCities) {
//         return <div>Loading...</div>;
//     }

//     if (isErrorCities) {
//         return <div>Error fetching categories</div>;
//     }
//     console.log(cities);
    

//     return (
//         <EditSelect>
//             {cities?.data?.map(city => (
//                 <EditOption key={city.id} value={city.id}>{city.name.en}</EditOption>
//             ))}
//         </EditSelect>
//     );
// };

// export default Citieslist;
