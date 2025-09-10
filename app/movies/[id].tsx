import { icons } from '@/constants/icons';
import { fetchMovieDetails } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface MoiveInfoProps {
  label: string;
  value: string | undefined;
}

const MoiveInfo = ({ label, value }: MoiveInfoProps) => {
  return (
    <View className='flex-col items-start justify-center mt-5'>
      <Text className='text-light-200 text-sm font-bold'>{label}</Text>
      <Text className='text-light-100 font-bold text-sm mt-2'>{value || "N/A"}</Text>
    </View>
  )
}

const MovieDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: movie, loading, error } = useFetch<Movie>(() => fetchMovieDetails(id));

  return (
    <View className='flex-1 bg-primary'>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
            className='w-full h-[550px]' resizeMode='stretch' />
        </View>
        <View className='flex-col items-start justify-center mt-5 px-5'>
          <Text className='text-white text-xl font-bold'>{movie?.title}</Text>
          <View className='flex-row items-center gap-x-1 mt-2'>
            <Text className='text-light-200 text-xs'>{movie?.release_date?.split('-')[0]}</Text>
            <Text className='text-light-200 text-xs'>{movie?.runtime} min</Text>
          </View>
          <View className='flex-row items-center gap-x-1 mt-2 bg-dark-200 rounded-md px-2 py-1'>
            <Image source={icons.star} className='size-4' />
            <Text className='text-light-200 text-sm'>{Math.round(movie?.vote_average ?? 0 / 2)} / 10</Text>
            <Text className='text-light-200 text-sm'>({movie?.vote_average}) votes</Text>
          </View>
          <MoiveInfo label='Overview' value={movie?.overview} />
          <MoiveInfo label='Genres' value={movie?.genres?.map(genre => genre.name).join(', ')} />
          <View className='flex flex-row justify-between w-1/2'>
            <MoiveInfo label='Budget' value={`$${(movie?.budget || 0) / 1_000_000} million`} />
            <MoiveInfo label='Revenue' value={`$${Math.round(movie?.revenue || 0) / 1_000_000}`} />
          </View>
          <MoiveInfo label='Production Companies' value={movie?.production_companies?.map(company => company.name).join(', ')} />
        </View>

        <TouchableOpacity className='absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50'
        onPress={() => router.back()}>
          <Image source={icons.arrow} className='size-5 mr-1 mt-0.5 rotate-180' tintColor='white' />
          <Text className='text-white text-base font-semibold'>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  )
}

export default MovieDetails