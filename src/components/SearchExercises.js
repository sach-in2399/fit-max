import React ,{useEffect,useState} from  "react" ;
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions,fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [search,setSearch]=useState('')
    // const [exercise,setExercise]=useState([])
    const [bodyParts,setBodyParts]=useState([])
useEffect(()=>{
    const fetchExerciseData=async()=>{
        const bodyPartsData=await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=2000",exerciseOptions)
        setBodyParts(['all',...bodyPartsData])
    };
    fetchExerciseData();
},[]);


const handleSearch=async function(){
        if(search){
            const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=2000',exerciseOptions);
            // const exerciseData=await fetchData();

            // console.log(exerciseData);
            const searchedExercises=exerciseData.filter(
                (excercise)=> excercise.name.toLowerCase().includes(search)
                || excercise.target.toLowerCase().includes(search)
                ||  excercise.equipment.toLowerCase().includes(search)
                || excercise.bodyPart.toLowerCase().includes(search)
            )
            setSearch('');
            setExercises(searchedExercises);
            window.scrollTo({top:2100, left:100, behavior:"smooth"});

        }
    };
const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
    };
    
    
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="200px">
        <Typography fontWeight={700} sx={{
            fontsize:{lg:'440px',xs:"300px"}
        }}
        mb="50px" textAlign='center'
        >
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box position='relative' mb="72px">
            <TextField 
                sx={{
                    input:
                    {
                        fontWeight:'700',
                        border:'none',
                        borderRadius:"4px"
                    },
                    width:{lg: '1170px', xs:'350px'},
                    backgroundColor:"#fff",
                    borderRadius:'40px'
                }}
                height="76px"
                value={search}
                onChange={(e)=>{ 

                    setSearch(e.target.value.toLowerCase()) 
                }}
                placeholder="Search Exercises"
                type="text"
                onKeyDown={handleKeyPress}
            >
                
            </TextField>
            <Button className="search-btn" 
            sx={{
                bgcolor: '#FF2625',
                color: '#fff',
                textTransform: 'none',
                width: { lg: '173px', xs: '80px' },
                height: '56px',
                position: 'absolute',
                right: '0px',
                fontSize: { lg: '20px', xs: '14px' } 
                }} onClick={handleSearch}>
            Search
            </Button>        
        </Box>
        <Box sx={{
            position:'relative',
            width:'100%',
            p:'20px'
        }}>
            <HorizontalScrollBar 
            data={bodyParts}
            bodyParts
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            />
        </Box>
    </Stack>
  )
}

export default SearchExercises



