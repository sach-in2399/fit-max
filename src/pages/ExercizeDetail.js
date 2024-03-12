import React ,{useEffect,useState}from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOptions,fetchData ,youtubeOptions} from '../utils/fetchData';
import { Box } from '@mui/material';
// import { Details } from '@mui/icons-material';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';

const ExercizeDetail = () => {

  const [exerciseDetail,setExerciseDetail]=useState({});
  const {id}=useParams();
  const [exerciseVideos,setExerciseVideos]=useState([]);
  const [targetMuscleExercises,setTargetMuscleExercises]=useState([]);
  const [equipmentExercises,setEquipmentExercises]=useState([]);
  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl=`https://youtube-search-and-download.p.rapidapi.com`

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}?limit=2000`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    }
    fetchExerciseData()
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExercizeDetail