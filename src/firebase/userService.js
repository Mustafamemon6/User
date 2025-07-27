// src/firebase/userService.js
import { db } from './config';
import { doc, setDoc, getDoc, updateDoc, collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// Create or update user document
export const saveUserData = async (uid, data) => {
  try {
    await setDoc(doc(db, 'users', uid), data, { merge: true });
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
};

// Get user data by UID
export const getUserData = async (uid) => {
  try {
    const docSnap = await getDoc(doc(db, 'users', uid));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    throw error;
  }
};

// Submit a new appointment request
export const submitAppointment = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'appointments'), data);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting appointment:', error);
    throw error;
  }
};

// Submit a new help request
export const submitHelpRequest = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'helpRequests'), data);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting help request:', error);
    throw error;
  }
};

// Get all requests (appointments/help) by user ID
export const getUserRequests = async (uid, type = 'appointments') => {
  try {
    const q = query(collection(db, type), where('userId', '==', uid));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting user requests:', error);
    throw error;
  }
};
