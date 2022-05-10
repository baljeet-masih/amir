  // hide all elemnts by default
  $('#RERformContent').hide()
  $('#DERForm').hide()
  $('#Feeding').hide()
  $('#dailyIntake').hide()
  $('#dailyIntakeBtn').hide()
  $('#calculateFeeding').hide()
  $('#derFormBtn').hide()
  $('#addFeeding').hide()

  //  step varibales intilization

  const step1 = $('#RERformContent .form_inner .form_items');
  const step2 = $('div[data-repeater-list="group-b"]');
  const step3 = $('#dailyIntake .form_inner .form_items');
  const step4 = $('#calculateFeeding .label_item');

  // ******************* step 1 ************************ //
  step1.find('input').on('keyup', () => {
    var step1Complete = formStep1(step1)
  })
  // ******************* step 1 ************************ //

  // ******************* step 1 ************************ //
  step2.find('input').on('keyup', () => {
    var step2Complete = formStep2(step2)
  })
  // ******************* step 1 ************************ //

  // ******************* step 3 ************************ //
  step3.find('input').on('keyup', () => {
    var step3Complete = formStep3(step3)
  })
  // ******************* step 3 ************************ //

  // ******************* step 4 ************************ //
  step4.find('input').on('keyup', () => {
    var step4Complete = formStep4(step4)
  })
  // ******************* step 4 ************************ //


  // Display Form Data Step By Step
  $('#addRER').on('click', () => {
    $('#RERformContent').slideDown()
  })
  $('#derFormBtn').on('click', () => {
    $('#DERForm').slideDown()
  })

  $('#dailyIntakeBtn').on('click', () => {
    $('#dailyIntake').slideDown()
  })

  $('#addFeeding').on('click', () => {
    $('#calculateFeeding').slideDown()
    $('#Feeding').slideDown()
  })



  // ******************* step 1 function ************************ //

  function formStep1(step1) {
    var fieldLegnth = step1.length
    var count = 0
    var flag = false
    step1.each((e, index) => {
      if ($(index).find('input').val() == '') {
        flag = false
      } else {
        count++
      }
      if (fieldLegnth == count) {
        flag = true
        $('#derFormBtn').show()
        // $('#dailyIntakeBtn').show()
        $('#RERoption').attr('step', 'stepCompleted')
      } else {
        flag = false
      }
    })
    return flag
  }

  // ******************* step 1 function ************************ //


  // ******************* step 2 function ************************ //

  function formStep2(step2) {
    var fieldLegnth = step2.length
    var count = 0
    var flag = false
    step2.each((e, index) => {
      if ($(index).find('input').val() == '') {
        flag = false
      } else {
        count++
      }
      if (fieldLegnth == count) {
        flag = true
        $('#dailyIntakeBtn').show()
        $('#DERoption').attr('step', 'stepCompleted')
      } else {
        flag = false;
      }
    })
    return flag
  }
  
  // ******************* step 2 function ************************ //


  // ******************* step 3 function ************************ //

  function formStep3(step3) {
    var fieldLegnth = step3.length
    var count = 0
    var flag = false
    step3.each((e, index) => {
      if ($(index).find('input').val() == '') {
        flag = false
      } else {
        count++
      }
      if (fieldLegnth == count) {
        flag = true
        console.log('hello')
        $('#dailyIntakeOption').attr('step', 'stepCompleted')
        $('#addFeeding').show()
      } else {
        flag = false
      }
    })
    return flag
  }

  // ******************* step 3 function ************************ //


  // ******************* step 4 function ************************ //

  function formStep4(step4) {
    var fieldLegnth = step4.length
    var count = 0
    var flag = false
    step4.each((e, index) => {
      if ($(index).find('input').val() == '') {
        flag = false
      } else {
        count++
      }
      if (fieldLegnth == count) {
        flag = true
        console.log('hello')
        $('#Feedingoption').attr('step', 'stepCompleted')
        $("#addFeeding").show();
        $("#Feeding").show();
      } else {
        flag = false
      }
    })
    return flag
  }

  // ******************* step 4 function ************************ //


  // ======= feild repeater js start ======= //
  $('.repeater').repeater({
    initEmpty: false,
    defaultValues: {
      // 'text-input': 'foo',
    },
    show: function () {
      $(this).slideDown()
    },
    hide: function (deleteElement) {
      if (confirm('Are you sure you want to delete this element?')) {
        $(this).slideUp(deleteElement)
      }
    },
    ready: function (setIndexes) {},
    isFirstItemUndeletable: true,
  })
  // ======= feild repeater js End ======= //