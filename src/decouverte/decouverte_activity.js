import Blockly from 'node-blockly/browser';
import img_cat from '../assets/img/cat.png'
import img_dog from '../assets/img/dog.png'
import img_unicorn from '../assets/img/unicorn.png'

export const decouverte_activities = [
  {
    initAnwser: () => {
      window.answer = "";
    },
    checkAnwser: () => {
      console.info(window.answer);
      return window.answer === "OK";
    },
    blocks: [
      {
        name: 'block_1',
        category: 'Activité 1',
        block: {
          init: function () {
            this.appendDummyInput()
              .appendField("Place-moi");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('Place-moi sur le plan de travail');
          },
        },
        generator: (block) => {
          const code = 'window.answer += "O";\n';
          return code;
        },
      },
///////////////////////////////////////////////////////////////////
      {
        name: 'block_2',
        category: 'Activité 1',
        block:
          {
            init: function () {
              this.appendDummyInput()
                .appendField("Place-moi");
              this.appendDummyInput()
                .appendField("En dessous du bloc violet");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(345);
              this.setTooltip('Place-moi sur le plan de travail');
            }
            ,
          }
        ,
        generator: (block) => {
          const code = 'window.answer += "K";\n';
          return code;
        },
      }
    ]
  },
///////////////////////////////////////////////////////////////////
  {
    initAnwser: () => {
      window.answer = "";
    },
    checkAnwser: () => {
      console.info(window.answer);
      return window.answer !== "NO";
    },
    blocks: [
      {
        name: "block_delete",
        category: 'Activité 2',
        block: {
          init: function () {
            this.appendDummyInput()
              .appendField("Supprime-moi");
            this.setColour(230);
            this.setTooltip('Supprime moi du plan de travail');
          }
        },
        generator: (block) => {
          const code = 'window.answer += "NO";\n';
          return code;
        },
      }
    ]
  },
///////////////////////////////////////////////////////////////////
  {
    initAnwser: () => {
      window.answer = "";
    },
    checkAnwser: () => {
      console.info(window.answer);
      return window.answer === "CHIEN";
    },
    blocks: [
      {
        name: "block_help",
        category: 'Activité 3',
        block: {
          init: function () {
            this.appendDummyInput()
              .appendField("Besoin d'aide ?");
            this.appendDummyInput();
            this.appendDummyInput()
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField("Choix     ")
              .appendField(new Blockly.FieldDropdown([
                [{"src": `${img_unicorn}`, "width": 32, "height": 32, "alt": "unicorn"}, "UNICORN"],
                [{"src": `${img_cat}`, "width": 32, "height": 32, "alt": "chat"}, "CHAT"],
                [{"src": `${img_dog}`, "width": 32, "height": 32, "alt": "chien"}, "CHIEN"]]), "choix");
            this.setColour(230);
            this.setTooltip('Clique-droit sur moi pour avoir de l\'aide');
          }
        },
        generator: (block) => {
          const dropdown_choix = block.getFieldValue('choix');
          const code = 'window.answer ="' + dropdown_choix + '";\n';
          return code;
        },
      }
    ]
  },
///////////////////////////////////////////////////////////////////
  {
    initAnwser: () => {

    },
    checkAnwser: () => {
      return true;
    },
    blocks: [
      {
        name: "affiche",
        category: 'Activité 4',
        block: {
          init: function () {
            this.appendValueInput("input")
              .setCheck("String")
              .appendField("Affiche");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('Affiche du texte à l\'écran');
          }
        },
        generator: (block) => {
          const value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
          let code = '';
          if (value_input) {
            code += 'alert(' + value_input + ');\n';
          }
          return code;
        },
      }
    ]
  }
];