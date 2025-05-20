import { useForm } from 'react-hook-form';
import { GuestIcon, GuestsIcon, PhoneBorderIcon, EmailBorderIcon } from '@public/dummyData/Icons';

export interface reservationFormValuesType {
  guestName: string;
  phoneNumber: string;
  reservationTime: string;
  emailAddress: string;
  reservationDate: string;
  numberOfGuests: string;
}
interface formInputsDataType {
  placeholder: string;
  type: string;
  name:
    | 'guestName'
    | 'phoneNumber'
    | 'reservationTime'
    | 'emailAddress'
    | 'reservationDate'
    | 'numberOfGuests';
  Icon?: JSX.Element;
}

export const formInputsData: formInputsDataType[] = [
  {
    placeholder: 'Guest Name...',
    type: 'text',
    name: 'guestName',
    Icon: <GuestIcon />
  },
  {
    placeholder: 'Phone number...',
    type: 'phone',
    name: 'phoneNumber',
    Icon: <PhoneBorderIcon />
  },
  {
    placeholder: 'Reservation Time...',
    type: 'time',
    name: 'reservationTime'
  },
  {
    placeholder: 'Email Address...',
    type: 'email',
    name: 'emailAddress',
    Icon: <EmailBorderIcon />
  },
  {
    placeholder: 'Reservation Date...',
    type: 'date',
    name: 'reservationDate'
  },
  {
    placeholder: 'Number Of Guest...',
    type: 'number',
    name: 'numberOfGuests',
    Icon: <GuestsIcon />
  }
];
export const formValidation: { [k: string]: any } = {
  guestName: {
    required: 'this field is required',
    minLength: {
      value: 2,
      message: 'short name'
    }
  },
  phoneNumber: {
    required: 'this field is required',
    pattern: {
      value: /^(06|07)\d{8}$/,
      message: 'phone number must start with 06 or 07 and be exactly 10 digits'
    }
  },
  emailAddress: {
    required: 'this field is required',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Invalid email address'
    }
  },
  numberOfGuests: {
    required: 'this field is required',
    min: { value: 1, message: 'value must be 1 or greater' }
  },
  reservationDate: {
    required: 'this field is required'
  }
};

export const useReservationForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      guestName: '',
      phoneNumber: '',
      reservationTime: '',
      emailAddress: '',
      reservationDate: '',
      numberOfGuests: ''
    }
  });

  const today = new Date().toISOString().split('T')[0];
  const selectedDate = watch('reservationDate');

  const reservationTime = (): { [k: string]: any } => {
    return {
      reservationTime: {
        required: 'this field is required',
        validate: (value: any) => {
          if (selectedDate === today) {
            const currentTime = new Date();
            const [hours, minutes] = value.split(':').map(Number);
            const selectedTime = new Date();
            selectedTime.setHours(hours, minutes, 0, 0);
            if (selectedTime <= currentTime) {
              return "time must be greater than the current time for today's date";
            }
          }
        }
      }
    };
  };
  return {
    errors,
    control,
    reset,
    handleSubmit,
    formValidation: { ...formValidation, ...reservationTime() }
  };
};
