<template>
    <div>
        <el-row>
            <el-button v-for="(item, index) in options" :key="index" @click="raise(index)">
                {{ item.name }}
                <br/> P: {{ item.price.toFixed(2) }}
                <br/>
                <span style="display:block;background:black;" :class="item.amount > 0 ? '':'zero'">{{ item.amount }}</span>
            </el-button>
        </el-row>
        <el-row>
            <el-button type="primary" @click="raiseMulti([0,1,2])" round>Front</el-button>
            <el-button type="success" @click="raiseMulti([3,4,5])" round>Back</el-button>
            <el-button type="warning" @click="raiseMulti([0,2,4])" round>even</el-button>
            <el-button type="danger" @click="raiseMulti([1,3,5])" round>odd</el-button>
        </el-row>
        <el-row>
            <el-tag>Total Beans： {{ totalBeans }} UNITs</el-tag>
            <el-radio-group v-model="unit">
                <el-radio-button label="1"></el-radio-button>
                <el-radio-button label="2"></el-radio-button>
                <el-radio-button label="4"></el-radio-button>
                <el-radio-button label="8"></el-radio-button>
                <el-radio-button label="16"></el-radio-button>
                <el-radio-button label="32"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-button type="info" @click="reset" :disabled="totalBeans == 0">RESET</el-button>
            <el-button type="primary" @click="dialogConfirmVisible = true" :disabled="totalBeans == 0">SUBMIT</el-button>
        </el-row>
        <el-dialog title="Confirm" :visible.sync="dialogConfirmVisible">
            <el-table :data="vaildOptions" border>
                <el-table-column property="name" label="Option"></el-table-column>
                <el-table-column property="price" label="Price"></el-table-column>
                <el-table-column property="amount" label="Amounts"></el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                Total Beans： {{ totalBeans }} UNITs
                <el-button @click="dialogConfirmVisible = false">Cancel</el-button>
                <el-button type="primary" @click="submit()">Confirm</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<style scoped>
.zero {
  visibility: hidden;
}

.el-row {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      options: [
        { name: "Beans A", price: 2.25, amount: 0 },
        { name: "Beans B", price: 3.75, amount: 0 },
        { name: "Beans C", price: 1.25, amount: 0 },
        { name: "Beans D", price: 5.0, amount: 0 },
        { name: "Beans E", price: 3.32, amount: 0 },
        { name: "Beans F", price: 7.65, amount: 0 }
      ],
      unit: 1,
      dialogConfirmVisible: false
    };
  },
  computed: {
    vaildOptions: function() {
      return this.options.filter(opt => Number(opt.amount) > 0);
    },
    totalBeans: function() {
      var sum = 0;
      this.vaildOptions.forEach(function(item) {
        sum += Number(item.amount);
      });
      return sum.toFixed(2);
    }
  },
  methods: {
    raise(idx) {
      this.options[idx].amount += Number(this.unit);
    },
    raiseMulti(indexs) {
      var self = this;
      indexs.forEach(function(idx) {
        self.options[idx].amount += Number(self.unit);
      });
    },
    reset() {
      for (var idx in this.options) this.options[idx].amount = 0;
    },
    submit() {
      this.dialogConfirmVisible = false;
      console.log(JSON.stringify(this.vaildOptions));
      this.reset();
    }
  }
};
</script>