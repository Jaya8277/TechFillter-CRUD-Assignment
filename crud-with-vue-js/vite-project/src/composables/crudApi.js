import { ref } from 'vue'
import axios from 'axios'

export default function useEmployee() {
  const url = "http://localhost:3333/EmployeeData/"
  const employeData = ref([])
  const error = ref(null)
  const statusCode = ref(null)
  const delError = ref(null)
  // Get All Employee Data
  const getAllEmployee = async () => {
    employeData.value = []
    error.value = null
    try {
      const res = await axios(url)
      // console.log(res.data)
      employeData.value = res.data
    } catch (err) {
      // console.log(err)
      error.value = err
    }
  }
  // Get Single Employee Data
  const getSingleEmployee = async (id) => {
    employeData.value = []
    error.value = null
    try {
      const res = await axios(url + id)
      employeData.value = res.data
    } catch (err) {
      error.value = err
    }
  }

  // Post/Add Employee Data
  const createEmp = async (formData) => {
    employeData.value = []
    error.value = null
    try {
      const config = {
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(formData)
      }
      const res = await axios(config)
      // console.log(res)
      employeData.value = res.data
      statusCode.value = res.status
    } catch (err) {
      error.value = err
    }
  }

  // Update Employee Data
  const updateEmploye = async (id, data) => {
    employeData.value = []
    error.value = null
    try {
      const config = {
        method: 'PUT',
        url: url + id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      }
      const res = await axios(config)
      employeData.value = res.data
      statusCode.value = res.status
    } catch (err) {
      error.value = err
    }
  }

  // Delete Employee Data
  const destroyEmployee = async (id) => {
    employeData.value = []
    error.value = null
    try {
      const config = {
        method: 'DELETE',
        url: url + id,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const res = await axios(config)
      // console.log(res)
      statusCode.value = res.status
    } catch (err) {
      delError.value = err
    }
  }
  return {
    employeData,
    error,
    statusCode,
    delError,
    getAllEmployee,
    getSingleEmployee,
    createEmp,
    updateEmploye,
    destroyEmployee
  }
}