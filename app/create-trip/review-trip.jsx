import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTripContext } from './../../context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {

    const navigation = useNavigation();
    const {tripData, setTripData} = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 35,
                marginTop: 20
            }}>Review your Trip</Text>

            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                }}>Before generating your trip, please review your selection.</Text>

                {/*Destination Info */}
                <View style={{
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}>
                    <Ionicons name="location-sharp" size={44} color="black" />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY,
                        }}>Destination</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}>{tripData?.locationInfo?.name}</Text>
                    </View>
                </View>

                {/*Date Selected Info */}
                <View style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}>
                    <Ionicons name="calendar-sharp" size={44} color="black" />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY,
                        }}>Travel Dates</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}>{moment(tripData?.startDate).format('DD MMM') + " To " + moment(tripData?.endDate).format('DD MMM') + " "} ({tripData?.totalNoOfDays} days)</Text>
                    </View>
                </View>

                {/*Traveler Info */}
                <View style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}>
                    <Ionicons name="person-sharp" size={44} color="black" />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY,
                        }}>Who is Travelling</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}>{tripData?.traveler?.title}</Text>
                    </View>
                </View>

                {/*Budget Info */}
                <View style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}>
                    <Ionicons name="cash-sharp" size={44} color="black" />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY,
                        }}>Budget</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}>{tripData?.budget}</Text>
                    </View>
                </View>

                <TouchableOpacity
                        // onPress={() => onClickContinue()}
                        style={{
                          padding: 15,
                          backgroundColor: Colors.PRIMARY,
                          borderRadius: 15,
                          marginTop: 80,
                        }}>
                        <Text style={{
                          textAlign: 'center',
                          color: Colors.WHITE,
                          fontFamily: 'outfit-medium',
                          fontSize: 20,
                        }}>
                          Build My trip
                        </Text>
                      </TouchableOpacity>
            </View>
        </View>
    )
}