# Instruct terraform to download the provider on `terraform init`
terraform {
  required_providers {
    xenorchestra = {
      source = "terra-farm/xenorchestra"
      version = "~> 0.23.0"
    }
  }
}

# Configure the XenServer Provider
provider "xenorchestra" {
  # Must be ws or wss
  url      = "ws://192.168.1.253" # Or set XOA_URL environment variable
  username = "MacCracken"              # Or set XOA_USER environment variable
  password = "Macken00!"              # Or set XOA_PASSWORD environment variable
  insecure = false
}

# Content of the terraform files
data "xenorchestra_pool" "pool" {
    name_label = "bias"
}

data "xenorchestra_template" "template" {
    name_label = "Rocky Linux 8 Minimal"
}

data "xenorchestra_network" "net" {
  name_label = "Pool-wide network associated with eth0"
}

resource "xenorchestra_cloud_config" "bar" {
  name = "cloud config name"
  # Template the cloudinit if needed
  template = templatefile("cloud_config.tftpl", {
    hostname = "test"
    domain = "localhost"
  })
}

resource "xenorchestra_vm" "bar" {
    memory_max = 1073733632
    cpus  = 1
    cloud_config = xenorchestra_cloud_config.bar.template
    name_label = "Name"
    name_description = "description"
    template = data.xenorchestra_template.template.id

    # Prefer to run the VM on the primary pool instance
    affinity_host = data.xenorchestra_pool.pool.master
    network {
      network_id = data.xenorchestra_network.net.id
    }

    disk {
      sr_id = "de9e4954-c331-41ed-b0a3-2f1046cd3900"
      name_label = "Rocky Linux 8 Base"
      size = 32212254720 
    }

    tags = [
      "Rocky",
      "Green Obsidian",
    ]

    // Override the default create timeout from 5 mins to 20.
    timeouts {
      create = "20m"
    }
}
